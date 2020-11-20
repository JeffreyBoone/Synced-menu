import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [
        { id: 1, className: '', category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { id: 2, className: '', category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
        { id: 3, className: '', category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
        { id: 4, className: '', category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { id: 5, className: '', category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
        { id: 6, className: '', category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
      ],
      text2: [
        { id: 6, className: '', category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
        { id: 1, className: '', category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { id: 7, className: '', category: '7', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { id: 4, className: '', category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { id: 5, className: '', category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
        { id: 2, className: '', category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
        { id: 3, className: '', category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
      ],
    };
  }

  onclick(id) {
    this.set(id);
    this.set2(id);
  }

  set(id) {
    let s = this.state.text.map(f => {
      if (f.id === id & f.className === "") {
        f.className = "blue";
      } else f.className = "";
      return f;
    });

    this.setState({
      text: s
    })
  }

  set2(id) {
    let s = this.state.text2.map(f => {
      if (f.id === id & f.className === "") {
        f.className = "blue";
      } else f.className = "";
      return f;
    });

    this.setState({
      text2: s
    })
  }

  render() {
    const { text } = this.state;
    const { text2 } = this.state;

    return (<div>
      <div>
        <ul>
          {text.map((t) =>
            <li key={t.id} className={t.className} onClick={() => this.onclick(t.id)}>{t.category}</li>
          )}
        </ul>
      </div>
      <div>
        <ul>
          {text2.map((t) =>
            <li key={t.id} className={t.className} onClick={() => this.onclick(t.id)}>{t.category}</li>
          )}
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
