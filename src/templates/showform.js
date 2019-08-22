import React, { useState , Fragment } from "react"
import { graphql } from "gatsby"
import Form from "react-jsonschema-form";
import Header from "../components/header"
import Breadcumb from "../components/breadcrumb"
import Footer from "../components/footer"

export const query = graphql`
  query($slug: String!) {
    showform{
        dctSchema(path: $slug) {
            name
            path
            printFormPath
            schema
        }
    }
  }
`;

export default ({data}) => {

    const printForm = data.showform.dctSchema.printFormPath

    const [formData, setformData] = useState({});
    const [pdfUrl, setpdfUrl] = useState('');
    const [download, setdownload] = useState(true);

    function onSubmit (formData) {
        setformData(formData);
        setdownload(false);

        return fetch(`https://dct.uslugi.kzn.ru/dcts`, {
            body: JSON.stringify({ print_form_data: printForm, data: formData.formData}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            setpdfUrl(response.url);
            }
        );
    }
    if(download){
    return (
        <Fragment>
            <Header/>
            <Breadcumb title="Формы" action="Выбери форму"/>
                <div className="container">
                <div className="row">
                    <Form formData={formData} onSubmit={onSubmit} schema={data.showform.dctSchema.schema}/>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )} else {
        return (
            <Fragment>
                <Header/>
                <Breadcumb title="Формы" action="Выбери форму"/>
                <div className="container">
                    <div className="row">
                        <Form formData={formData} onSubmit={onSubmit} schema={data.showform.dctSchema.schema}/>
                    </div>
                    <br/>
                    <div className="row">
                        <p>Открыть файл:&ensp;</p>
                        <a href={pdfUrl} target="_blank"><button className="btn btn-info">PDF</button></a>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        )

    }
}

