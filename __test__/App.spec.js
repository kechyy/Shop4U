import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from '../src/components/App';

configure({ adapter: new Adapter() });



describe('Sample Test', () => {
  it('Should return a successful sample test', () => {
    expect(true).toBeTruthy();
})
  it('Should render App without crashing', () => {
  const Wrapper = mount(<App />);

    expect(toJson(Wrapper)).toMatchSnapshot();
  })

  it('should render home without crashing', () => {
  const Wrapper = mount(<App />);
    expect(Wrapper).toBeDefined();
    expect(toJson(Wrapper)).toMatchSnapshot();

  })
  it('should find h1 element', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').text()).toBe('Welcome to Shop4U');
  });
})