import './styles.css'
import GithubSearchCard from "../../../components/GithubSearchCard";
import { Outlet } from 'react-router-dom';

export default function SearchPage() {

    return (
        <>
            <main>
                <section id="search-page-section" className="container-search-page">
                    <GithubSearchCard />
                </section>
                <Outlet />
            </main>
        </>
    )
}