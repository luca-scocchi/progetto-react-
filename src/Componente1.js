import React from 'react'

class Componente1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date().toLocaleDateString() // Ottieni la data corrente come stringa formattata
    };
  }

  render() {
    return (
      <div className='article'>
        
        <p>{this.state.currentDate}</p>
      </div>
    );
  }
}

export default Componente1;

