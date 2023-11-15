/// <reference types="cypress" />

describe('测试表单提交', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3003/mb_demo/index/index')
  })

  it('用户名非空测试', () => {
    const userElement = cy.get('[placeholder="请输入用户名"]')
    const buttonElement = cy.contains('提交')

    buttonElement.click()

    cy.contains('请输入用户名').should('exist')
    cy.contains('确定').click()

    userElement.type('222')

    buttonElement.click()

    cy.contains('请输入用户名').should('not.exist')
  })

  it('密码非空测试', () => {
    cy.intercept('GET', '/api/login').as('loginApi')

    const userElement = cy.get('[placeholder="请输入密码"]')
    const buttonElement = cy.contains('提交')
    cy.get('[placeholder="请输入用户名"]').type('222')

    buttonElement.click()
    cy.contains('请输入密码').should('exist')
    cy.contains('确定').click()

    userElement.type('111')

    buttonElement.click()

    // cy.contains('请输入密码').should('not.exist')

    cy.wait('@loginApi')

    cy.contains('提交成功').should('exist')

  })
})
