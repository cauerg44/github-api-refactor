import ButtonPrimary from '../ButtonPrimary'
import './styles.css'

export default function GithubSearchCard() {
    return (
        <div className="github-search-card">
            <div className='github-search-card-content'>
                <form>
                    <h2>Encontre um perfil Github</h2>
                    <input
                        type="text"
                        placeholder='Usuário Github' />
                </form>
                <ButtonPrimary text='Encontrar' />
            </div>
        </div>
    )
}
