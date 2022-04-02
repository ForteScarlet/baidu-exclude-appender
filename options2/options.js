'use strict';


/**
 * 说明信息。
 */
class Illustrate extends React.Component {
    constructor() {
        super();
        this.illustrateElements = [
            <li>额外拼接的属性会拼接于输入内容的 <strong>结尾处</strong>。</li>,
            <li>当出现重复的排除参数时，不会重复添加。例如你的查询内容为 <code>红烧肉 -foo</code>，则不会在结尾处重复拼接 <code>-foo</code>。</li>,
            <li>
                <p><strong>不会</strong> 检测查询内容的 <strong>非结尾处</strong> 参数。</p>
                <p>
                    例如如果你的查询内容为 <code>红烧肉 -foo 炸鸡块</code>，
                    则会导致在结尾处拼接一个重复的 <code>-foo</code>，变成 <code>红烧肉 -foo 炸鸡块 -foo</code>。
                </p>
            </li>
        ]
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>说明</h1>
                </div>
                <div className="row">
                    <ul>{this.illustrateElements}</ul>
                </div>
            </div>
        )
    }
}





class Home extends React.Component {
    render() {
        return (
            <div className={`row`}>
                <Illustrate />
            </div>

        )
    }
}


ReactDOM.render(
    <Home />,
    document.getElementById('counter')
);

// const domContainer = document.querySelector('#counter');
// // ReactDOM.render(Illustrate, domContainer)
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(Illustrate));