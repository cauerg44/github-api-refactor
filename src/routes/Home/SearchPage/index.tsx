import './styles.css'
import GithubSearchCard from "../../../components/GithubSearchCard";

export default function SearchPage() {

    return (
        <>
            <main>
                <section id="search-page-section" className="container-search-page">
                    <GithubSearchCard />
                </section>
            </main>
        </>
    )
}