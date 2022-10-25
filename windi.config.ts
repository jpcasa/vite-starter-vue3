import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#F9F5FF',
          100: '#F4EBFF',
          500: '#7F56D9',
          600: '#6941C6',
          800: '#27105C',
          900: '#150637'
        },
        teal: {
          100: '#E2FFF2',
          200: '#BDFFE0',
          300: '#80FFC4',
          400: '#21FC96',
          500: '#0CDA7A',
          600: '#007D43',
          700: '#005353',
          800: '#003535',
          900: '#002323'
        },
        gray: {
          100: '#F9FAFC',
          200: '#F2F6FA',
          300: '#DCE6EE',
          400: '#ADB8C6',
          500: '#8795A1',
          600: '#464F5A'
        }
      }
    }
  }
})