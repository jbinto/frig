/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import Form from '../../src/components/form'
import { mount } from 'enzyme'

describe('<Form />', () => {
  // Despite eslint's pleadings, this can't be a stateless function
  // because <Form /> will tack a `ref` on to it, which is illegal.
  class ThemedForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() { return <form>{this.props.children}</form> } // eslint-disable-line react/prop-types
  }

  const formProps = {
    theme: { Form: ThemedForm },
    data: {},
    onChange: () => {},
    saved: {},
    errors: {},
    layout: 'horizontal',
    align: 'right',
  }
  const form = (
    <Form {...formProps} >
      <div>child</div>
    </Form>
  )

  it('fails fast when props.data is not provided', () => {
    const badForm = <Form onChange={formProps.onChange} />
    const wrapperBound = mount.bind(null, badForm)
    expect(wrapperBound).to.throw(Error, /data=/)
  })

  it('fails fast when props.onChange is not provided', () => {
    const badForm = <Form data={formProps.data} />
    const wrapperBound = mount.bind(null, badForm)
    expect(wrapperBound).to.throw(Error, /onChange=/)
  })

  it('renders the theme.Form component', () => {
    const wrapper = mount(form)
    expect(wrapper.find(ThemedForm)).to.have.length(1)
  })

  describe('via AbstractForm', () => {
    describe('context', () => {
      const UndecoratedForm = Form.originalClass
      const wrapper = mount(<UndecoratedForm {...formProps} />)
      const context = wrapper.instance().getChildContext()

      it('passes context (from props) down to its children', () => {
        expect(context.frigForm).to.exist()
        expect(context.frigForm.errors).to.equal(formProps.errors)
        expect(context.frigForm.layout).to.equal(formProps.layout)
        expect(context.frigForm.theme).to.equal(formProps.theme)
        expect(context.frigForm.align).to.equal(formProps.align)
        expect(context.frigForm.saved).to.equal(formProps.saved)
        expect(context.frigForm.data).to.equal(formProps.data)
      })

      it('passes context (internal callbacks) down to its children', () => {
        expect(context.frigForm.childComponentWillMount).to.be.a('function')
        expect(context.frigForm.childComponentWillUnmount).to.be.a('function')
      })

      // pending
      it('passes requestChildComponentChange via context')
      it('passes submit via context')
    })

    describe('public API', () => {
      const UndecoratedForm = Form.originalClass
      let wrapper
      let instance

      beforeEach(() => {
        wrapper = mount(<UndecoratedForm {...formProps} />)
        instance = wrapper.instance()
      })

      describe('validate()', () => {
        it('should return false if any inputs\' validate() returns false', () => {
          instance.childComponentWillMount('a', { validate: () => false })
          instance.childComponentWillMount('b', { validate: () => true })
          expect(instance.validate()).to.be.false()
        })

        it('should return true if all inputs\' validate() returns true', () => {
          instance.childComponentWillMount('a', { validate: () => true })
          instance.childComponentWillMount('b', { validate: () => true })
          expect(instance.validate()).to.be.true()
        })
      })

      describe('isValid()', () => {
        it('should return false if any inputs\' isValid() returns false', () => {
          instance.childComponentWillMount('a', { isValid: () => false })
          instance.childComponentWillMount('b', { isValid: () => true })
          expect(instance.isValid()).to.be.false()
        })

        it('should return true if all inputs\' isValid() returns true', () => {
          instance.childComponentWillMount('a', { isValid: () => true })
          instance.childComponentWillMount('b', { isValid: () => true })
          expect(instance.isValid()).to.be.true()
        })
      })

      describe('isModified()', () => {
        it('should be false initially', () => {
          expect(instance.isModified()).to.be.false()
        })
        it('should be false if all inputs\' isModified() returns false', () => {
          instance.childComponentWillMount('a', { isModified: () => false })
          instance.childComponentWillMount('b', { isModified: () => false })
          expect(instance.isModified()).to.be.false()
        })
        it('should be false if any inputs\' isModified() returns true', () => {
          instance.childComponentWillMount('a', { isModified: () => false })
          instance.childComponentWillMount('b', { isModified: () => true })
          expect(instance.isModified()).to.be.true()
        })
      })

      describe('resetModified()', () => {
        it('should call resetModified() on each component', () => {
          let hasReset = false
          instance.childComponentWillMount('a', {
            resetModified: () => { hasReset = true },
          })
          instance.resetModified()
          expect(hasReset).to.be.true()
        })
      })

      it('reset()', () => {
        it('should call reset() on each component', () => {
          let hasReset = false
          instance.childComponentWillMount('a', {
            reset: () => { hasReset = true },
          })
          instance.reset()
          expect(hasReset).to.be.true()
        })
      })

      describe('modifications()', () => {
        describe('when no fields are modified', () => {
          it('should return empty object', () => {
            expect(instance.modifications()).to.deep.equal({})
          })
        })
        describe('when fields are modified', () => {
          it('should return only modified values', () => {
            instance.childComponentWillMount('a', { isModified: () => true })
            instance.childComponentWillMount('b', { isModified: () => false })
            const expected = { a: true }
            expect(instance.modifications()).to.deep.equal(expected)
          })
          it('should return nested modified values', () => {
            instance.childComponentWillMount('c', {
              isModified: () => true,
              modifications: () => ({ d: true, e: true }),
            })
            const expected = { c: { d: true, e: true } }
            expect(instance.modifications()).to.deep.equal(expected)
          })
        })
      })

      it('formData()')
    })

    describe('private', () => {
      // Usually, we wouldn't test private functions so long as they get called
      // via a test exercising the public API. However, these tests were written
      // much later than the code itself. They exist to help new developers
      // explore & understand the code base. They are very brittle (coupled
      // to implementation). Major design changes will probably require removing
      // these tests. They might still have some use in detecting regressions,
      // but that's not their primary purpose.
      it('_themedFormProps()')
      it('_data()')
      describe('childComponentWill[Mount|Unmount]', () => {
        const UndecoratedForm = Form.originalClass
        const wrapper = mount(<UndecoratedForm {...formProps} />)
        const instance = wrapper.instance()

        const object = {}
        instance.childComponentWillMount('name', object)
        const mountedComponent = instance._childComponents()[0]

        it('mount adds components to _childComponents backing array', () => {
          expect(mountedComponent).to.equal(object)
        })

        it('unmount removes components from _childComponents backing array', () => {
          instance.childComponentWillUnmount('name')
          const childComponents = instance._childComponents()
          expect(childComponents).to.deep.equal([])
        })
      })

      it('_onChildRequestChange()')
      it('_onSubmit()')
    })
  })
})
