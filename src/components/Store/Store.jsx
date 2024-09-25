import { Component } from 'react';

import products from '../../products';

import { IconSwitch } from '../IconSwitch';
import { CardsView } from '../CardsView';

export class Store extends Component {
  cards = products;

  state = {
    icon: 'view_list',
    atCard: true,
  };

  onSwitch = () => {
    this.state.icon === 'view_list'
      ? this.setState({ icon: 'view_module', atCard: false })
      : this.setState({ icon: 'view_list', atCard: true });
  };

  render() {
    return (
      <>
        <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch} />
        <IconSwitch />
        <CardsView atCard={this.state.atCard} items={this.cards} />
      </>
    );
  }
}
