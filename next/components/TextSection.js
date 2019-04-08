import { colors } from '../config'

export default props => (
  <section className="wrapper">
    <h2 className="sectionTitle">{props.title}</h2>
    <div className="textWrapper">{props.children}</div>

    <style jsx>{`
      .sectionTitle {
        font-size: 3em;
      }

      .wrapper {
        padding: 5em 0;
        color: white;
        background-color: black;
        display: flex;
        flex-flow: column;
        align-items: center;
        text-align: center;
      }

      .textWrapper {
        width: 100%;
      }
    `}</style>
  </section>
)
