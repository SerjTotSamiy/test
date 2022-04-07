import './main.css'

function Main() {
    return <div className={'main'}>
        <div className={"main-wrapper"}>
            <div className={"text"}>
                <p>Путешествие</p>
                <h4>на красную планету</h4>
            </div>
            <button>Начать путешествие</button>
        </div>
        <div className={'main-sales'}>
            <div className="block">
                <span>мы</span>
                <p>1</p>
                <span>на рынке</span>
            </div>
            <div className="block">
                <span>гарантируем</span>
                <p>50%</p>
                <span>безопасности</span>
            </div>
            <div className="block">
                <span>календарик за</span>
                <p>2001г.</p>
                <span>в подарок</span>
            </div>
            <div className="block">
                <span>путешествие</span>
                <p>597</p>
                <span>дней</span>
            </div>
        </div>

    </div>
}

export default Main
