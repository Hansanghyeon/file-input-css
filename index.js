const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  const style = {
    '&': {
      position: 'relative',
      padding: '0.9375rem',
      color: '#f0f0f0',
      backgroundColor: '#2c2c3c',
      border: '2px solid #3e3e56',
      borderRadius: '0.3125rem',
      cursor: 'pointer',
    },
    '&::file-selector-button': {
      padding: '0.625rem 0.9375rem 0.625rem 2.125rem',
      color: '#fff',
      backgroundColor: 'var(--primary, #ef12f3)',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in',
    },
    '&::before': {
      content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M448 416V352C448 334.326 433.672 320 416 320S384 334.326 384 352V416C384 433.674 369.672 448 352 448H96C78.328 448 64 433.674 64 416V352C64 334.326 49.672 320 32 320S0 334.326 0 352V416C0 469.02 42.98 512 96 512H352C405.02 512 448 469.02 448 416ZM246.625 342.625L374.625 214.625C387.133 202.117 387.117 181.867 374.625 169.375C362.125 156.875 341.875 156.875 329.375 169.375L256 242.75V32C256 14.312 241.688 0 224 0S192 14.312 192 32V242.75L118.625 169.375C106.125 156.875 85.875 156.875 73.375 169.375S60.875 202.125 73.375 214.625L201.375 342.625C213.875 355.125 234.125 355.125 246.625 342.625Z' fill='%23fff' /%3E%3C/svg%3E")`,
      position: 'absolute',
      top: '50%',
      left: '1.5625rem',
      width: '0.9365rem',
      height: '1.25rem',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
    },
  }

  addComponents({
    '.file-input': style
  })
})
