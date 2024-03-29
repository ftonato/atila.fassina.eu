/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import {
  DONKEY_FUR,
  RADIOACTIVE_LIME,
  FRESH_GRASS,
  BERLINER_SKY,
  COLD_FOG,
  BRUSHED_STEEL,
  BLACKEST_NIGHT,
  BRIGHTEST_DAY,
  FLUORESCENT_PINE
} from '../../settings'

const GlobalStyle = createGlobalStyle`
:root {
  --inlineCode-bg: rgba(255, 229, 100, 0.2);
  --inlineCode-text: #1a1a1a;
  --fluorescent-pine: ${FLUORESCENT_PINE};
  --fresh-grass: ${FRESH_GRASS};
  --radioactive-lime: ${RADIOACTIVE_LIME};
  --donkey-fur: ${DONKEY_FUR};
  --berliner-sky: ${BERLINER_SKY};
  --cold-fog: ${COLD_FOG};
  --brushed-steel: ${BRUSHED_STEEL};
  --blackest-night: ${BLACKEST_NIGHT};
  --brightest-day: ${BRIGHTEST_DAY}
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-weight: 200;
  line-height: 1.2;
  background-color: white;
  box-sizing: border-box;
  overflow-x: hidden;
}
ul {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
strong {
  font-weight: 200;
}

abbr {
  cursor: help;
}
/**
 * Based on Overreacted.io by Dan Abramov, which is based on copypasta from Remy Bach and Sarah Drasner
 * 😉
 */
code[class*='language-'],
pre[class*='language-'] {
  color: white;
  background: none;
  font-family: "Fira Code", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
  font-feature-settings: normal;
  font-variant-ligatures: normal;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  margin-bottom: 0;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*='language-'] {
  overflow: auto;
  padding: 1.3125rem;
}

pre[class*='language-']::-moz-selection {
  /* Firefox */
  background: hsl(207, 4%, 16%);
}

pre[class*='language-']::selection {
  /* Safari */
  background: hsl(207, 4%, 16%);
}

/* Text Selection colour */
pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: hsla(0, 0%, 100%, 0.15);
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection {
  text-shadow: none;
  background: hsla(0, 0%, 100%, 0.15);
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  font-size: 1.5ch;
  color: DarkGreen;
  white-space: normal;
}

.token.attr-name {
  color: rgb(173, 219, 103);
  font-style: italic;
}

.token.comment {
  color: rgb(128, 147, 147);
}

.token.string,
.token.url {
  color: rgb(173, 219, 103);
}

.token.variable {
  color: rgb(214, 222, 235);
}

.token.number {
  color: rgb(247, 140, 108);
}

.token.builtin,
.token.char,
.token.constant,
.token.function {
  color: rgb(130, 170, 255);
}

.token.punctuation {
  // color: rgb(199, 146, 234);
  color: rgb(100, 235, 150);
}

.token.selector,
.token.doctype {
  color: rgb(100, 235, 150);
  font-style: 'italic';
}

.token.class-name {
  color: rgb(255, 203, 139);
}

.token.tag,
.token.operator,
.token.keyword {
  color: rgb(80, 250, 60);
}

.token.boolean {
  color: rgb(255, 88, 116);
}

.token.property {
  color: rgb(128, 203, 196);
  color: rgb(203, 128, 100);
}

.token.namespace {
  color: rgb(178, 204, 214);
}

pre[data-line] {
  padding: 1em 0 1em 3em;
  position: relative;
}

.gatsby-highlight-code-line {
  background-color: hsla(207, 95%, 15%, 1);
  display: block;
  margin-right: -1.3125rem;
  margin-left: -1.3125rem;
  padding-right: 1em;
  padding-left: 1.25em;
  border-left: 0.25em solid rgb(80, 250, 60);
}

.gatsby-highlight {
  margin-bottom: 1.75rem;
  margin-left: -1.3125rem;
  margin-right: -1.3125rem;
  border-radius: 10px;
  background: #011627;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
}

@media (max-width: 672px) {
  .gatsby-highlight {
    border-radius: 0;
  }
}

.gatsby-highlight pre[class*='language-'] {
  float: left;
  max-width: 100%;
}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
