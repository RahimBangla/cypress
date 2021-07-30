const rootResult = Cypress.currentTest

describe('currentTest', () => {
  const suiteResult = Cypress.currentTest

  before(() => {
    expectMatchingCurrentTitleInHook()
  })

  beforeEach(() => {
    expectMatchingCurrentTitleInHook()
  })

  after(() => {
    expectMatchingCurrentTitleInHook()
  })

  afterEach(() => {
    expectMatchingCurrentTitleInHook()
  })

  it('returns current test runnable', () => {
    expect(Cypress.currentTest.title)
    .is.a('string')
    .eq(cy.state('runnable').title)

    expect(Cypress.currentTest.titlePath)
    .eq(cy.state('runnable').titlePath())
  })

  it('returns null when outside test', () => {
    expect(rootResult).eq(null)
    expect(suiteResult).eq(null)
  })
})

const expectMatchingCurrentTitleInHook = () => {
  expect(Cypress.currentTest.title)
  .is.a('string')
  .eq(cy.state('runnable').ctx.currentTest.title)

  expect(Cypress.currentTest.titlePath)
  .eq(cy.state('runnable').titlePath())
}
