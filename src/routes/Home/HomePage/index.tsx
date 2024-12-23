import './styles.css'
import ButtonPrimary from "../../../components/ButtonPrimary";

export default function HomePage() {

    return (
        <>
        <main>
            <section id="home-page-section" className="container">
                <div className="home-content-page">
                    <h2>Desafio Github API</h2>
                    <h6>DevSuperior - Escola de programação</h6>
                </div>
                <ButtonPrimary text="Começar" />
            </section>
        </main>
        </>
    )
}