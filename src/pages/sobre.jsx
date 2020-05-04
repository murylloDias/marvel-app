import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"

const Sobre = () => {
  let text = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Sobre</h1>
            <p> {text} </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <Card
              nameImage="mission"
              titleCard="Missão"
              textCard="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
              colorButton="gatsby"
              backgroudCard="purple"
              styleDefault={true}
            />
          </div>

          <div className="col-lg-4 mb-3">
            <Card
              nameImage="vission"
              titleCard="Vissão"
              textCard="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
              colorButton="gatsby"
              backgroudCard="purple"
              styleDefault={true}
            />
          </div>

          <div className="col-lg-4 mb-3">
            <Card
              nameImage="value"
              titleCard="Valores"
              textCard="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
              colorButton="gatsby"
              backgroudCard="purple"
              styleDefault={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Sobre
