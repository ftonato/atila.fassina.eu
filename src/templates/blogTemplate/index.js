import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Header from '../../components/header'
import Banner from '../../components/mediumBanner'
import Author from '../../components/Author'
import Footer from '../../components/footer'
import { MainTitle, PostDate, PostWrap, Post, TitleWrap } from './styles'

const dayName = rawDate => {
  const dayIndex = new Date(rawDate).getDay()
  switch (dayIndex) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'

    default:
      return 'Someday'
  }
}

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    Array.from(document.querySelectorAll('a')).forEach(anchor => {
      if (!anchor.href.includes(window.location.host)) {
        anchor.target = '_blank'
        anchor.rel = 'nofollow noopener noreferrer'
      }
    })
  })

  return (
    <Layout>
      <SEO title="blogPost" keywords={frontmatter.keywords} />
      <Header internal={true} />
      <PostWrap>
        <TitleWrap>
          <MainTitle>{frontmatter.title}</MainTitle>
          <PostDate>
            {frontmatter.date} － {dayName(frontmatter.rawDate)}
          </PostDate>
        </TitleWrap>
        <Post dangerouslySetInnerHTML={{ __html: html }} />
        {!!frontmatter.mediumURL && <Banner link={frontmatter.mediumURL} />}
      </PostWrap>
      <Author next={pageContext.next} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        rawDate: date
        path
        title
        keywords
        mediumURL
        image
      }
    }
  }
`
