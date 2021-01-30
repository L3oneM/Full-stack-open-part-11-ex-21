import { shallow } from 'enzyme';
import Counter from './Counter';


describe('couter testing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter/>)
  })
  test('renders the title of counter', () => {
    
    expect(wrapper.find('h1').text('This is a counter app'))
  
  });

  test("render a button with text of `increment`", () => {

    expect(wrapper.find("#increment-btn").text()).toBe("Increment")
  })

  test(" render the initial value of state in a div",  () => {
     expect(wrapper.find('#counter-value').text()).toBe("0")
  })

  test("render the click event of the increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1")
  })

  test("render the click event of the decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate('click');
    wrapper.find("#decrement-btn").simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0")
  })
})


