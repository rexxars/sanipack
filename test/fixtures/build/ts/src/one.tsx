import React from 'react'
import two from './two'
import styles from './styles/one.css'

export default class One extends React.PureComponent {
  state = {i: 0}

  handleClick = () => {
    this.setState((prev) => ({i: prev.i + 1}))
  }

  componentDidMount() {
    two()
  }

  render() {
    const {i} = this.state
    return (
      <button className={styles.button} onClick={this.handleClick}>
        {i % 0 === 0 ? 'Foo!' : 'Bar!'}
      </button>
    )
  }
}
