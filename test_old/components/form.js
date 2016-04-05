"use strict"

require("../setup.js")
let React = require("react/addons")
let assert = require("assert")
let MochComponent = require("../moch_component.js")
let Form = React.createFactory(require(
  "../../src/javascripts/components/form.js"
))
let {renderIntoDocument, mockComponent} = React.addons.TestUtils

describe("Form", function(){
  beforeEach(function () {
    this.form = renderIntoDocument(Form({
      data: {},
      theme: {component: () => MochComponent},
      form: () => [],
    }))
  })

  describe("#validate", function() {
    it("should be false if any input's validate returns false", function() {
      this.form.childComponentWillMount("a", {validate: () => false})
      this.form.childComponentWillMount("b", {validate: () => true})
      assert.equal(this.form.validate(), false)
    })

    it("should be true if all input's validate returns true", function() {
      this.form.childComponentWillMount("a", {validate: () => true})
      assert.equal(this.form.validate(), true)
    })
  })

  describe("#isValid", function() {
    it("should be false if any input's isValid returns false", function() {
      this.form.childComponentWillMount("a", {isValid: () => false})
      this.form.childComponentWillMount("b", {isValid: () => true})
      assert.equal(this.form.isValid(), false)
    })

    it("should be true if all input's isValid returns true", function() {
      this.form.childComponentWillMount("a", {isValid: () => true})
      assert.equal(this.form.isValid(), true)
    })
  })

  describe("#isModified", function() {
    it("should be false initially", function() {
      assert.equal(this.form.isModified(), false)
    })

    it("should be false if all inputs isModified returns false", function() {
      this.form.childComponentWillMount("a", {isModified: () => false})
      assert.equal(this.form.isModified(), false)
    })

    it("should be true if any input isModified returns true", function() {
      this.form.childComponentWillMount("a", {isModified: () => true})
      this.form.childComponentWillMount("b", {isModified: () => false})
      assert.equal(this.form.isModified(), true)
    })
  })

  describe("#resetModified", function() {
    it("should call resetModified on each child component", function() {
      let hasReset = false
      this.form.childComponentWillMount("a", {
        isModified: () => true,
        resetModified: () => hasReset = true,
      })
      this.form.resetModified()
      assert.equal(hasReset, true)
    })
  })

  describe("#reset", function() {
    it("should call reset on each child component", function() {
      let hasReset = false
      this.form.childComponentWillMount("a", {
        isModified: () => true,
        reset: () => hasReset = true,
      })
      this.form.reset()
      assert.equal(hasReset, true)
    })
  })

  describe("#modifications", function() {
    describe("when no fields are modified", function() {
      it("should returns empty object", function() {
        assert.deepEqual(this.form.modifications(), {})
      })
    })

    describe("when fields are modified", function() {
      it("should return only modified values", function() {
        this.form.childComponentWillMount("a", {
          isModified: () => true,
        })
        this.form.childComponentWillMount("b", {
          isModified: () => false
        })
        assert.deepEqual(this.form.modifications(), {
          a: true,
        })
      })

      it("should return nested modified values", function() {
        this.form.childComponentWillMount("c", {
          isModified: () => true,
          modifications: () => ({d: true, e: true}),
        })
        assert.deepEqual(this.form.modifications(), {
          c: {d: true, e: true},
        })
      })
    })
  })

})
