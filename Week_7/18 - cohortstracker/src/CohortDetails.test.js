import React from 'react';
import { mount, shallow } from 'enzyme';
import CohortDetails from './CohortDetails';
import { CohortsData } from './Cohort';
import renderer from 'react-test-renderer';

describe('Cohort Details Component', () => {

  test('should create the component', () => {
    const wrapper = shallow(<CohortDetails cohort={CohortsData[0]} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should initialize the props', () => {
    const testCohort = CohortsData[0];
    const wrapper = mount(<CohortDetails cohort={testCohort} />);
    expect(wrapper.props().cohort).toEqual(testCohort);
  });

  test('should display cohort code and technology in h3', () => {
    const testCohort = CohortsData[0];
    const wrapper = mount(<CohortDetails cohort={testCohort} />);
    expect(wrapper.find('h3').text()).toEqual(`${testCohort.cohortCode} -${testCohort.technology}`);
  });

  test('should always render same html', () => {
    const testCohort = CohortsData[0];
    const tree = renderer.create(<CohortDetails cohort={testCohort} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
