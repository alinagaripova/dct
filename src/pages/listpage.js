import React from "react"
import { graphql} from "gatsby"
import Header from "../components/header"
import Breadcumb from "../components/breadcrumb"
import Footer from "../components/footer"

export const query = graphql`
  query {
    list{
        dctSchemasInfo {
          name
          path
        }
    }
  }
`;
export default ({data}) => {
    return(
    <div>
        <Header/>
        <Breadcumb title="Формы" action="Выбери форму"/>
        <div>
            <h1>Список форм:</h1>
            <ul className="list-group list-group-flush">
                {data.list.dctSchemasInfo.map((schema, i) =>
                    <a key={i} href={schema.path}><li className="list-group-item">{schema.name}</li></a>
                )}
            </ul>
        </div>
        <Footer/>
    </div>
)}