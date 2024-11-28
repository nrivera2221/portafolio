import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

function suma(numero) {
return numero+numero+numero
}

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Noemy Rivera Madrid')
  })

  it('suma', () => {
    const resultado = suma(1)
    expect(resultado).toBe(2)
  })
})
