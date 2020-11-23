import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [
        { id: 1, className: '', name: '1'},
        { id: 4, className: '', name: '4'},
        { id: 2, className: '', name: '2'},
        { id: 5, className: '', name: '5'},
        { id: 3, className: '', name: '3'},
        { id: 8, className: '', name: '8'},
        { id: 6, className: '', name: '6'}
      ],
      text2: [
        { id: 4, className: '', name: '4'},
        { id: 7, className: '', name: '7'},
        { id: 3, className: '', name: '3'},
        { id: 6, className: '', name: '6'},
        { id: 2, className: '', name: '2'},
        { id: 5, className: '', name: '5'},
        { id: 1, className: '', name: '1'},
      ],
    };
  }

  onclick(id, name) {
    this.set(id, name);
    this.set2(id, name);
  }

  set(id, name) {
    let s = this.state.text.map(f => {
      if (f.id === id & f.className === "") {
        f.className = "blue";
      } else f.className = "";
      return f;
    });

    var t = this.state.text.filter(g => (g.id === id));
    if (t == "") {
      alert(name + " is niet gevonden in de andere lijst");
    }

    this.setState({
      text: s
    })
  }

  set2(id, name) {
    let s = this.state.text2.map(f => {
      if (f.id === id & f.className === "") {
        f.className = "blue";
      } else f.className = "";
      return f;
    });

    var t = this.state.text2.filter(g => (g.id === id));
    if (t == "") {
      alert(name + " is niet gevonden in de andere lijst");
    }

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
            <li key={t.id} className={t.className} onClick={() => this.onclick(t.id, t.name)}>{t.name}</li>
          )}
        </ul>
      </div>
      <div>
        <ul>
          {text2.map((t) =>
            <li key={t.id} className={t.className} onClick={() => this.onclick(t.id, t.name)}>{t.name}</li>
          )}
        </ul>
      </div>
    </div>
    );
  }
}

export default App;
