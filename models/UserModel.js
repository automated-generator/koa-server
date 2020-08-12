const { nohm } = require('../redis')

exports.UserModel = nohm.model('User', {
  properties: {
    name: {
      type: 'string',
      unique: true,
      validations: ['notEmpty']
    },
    email: {
      type: 'string',
      unique: true,
      validations: ['notEmpty', 'email']
    },
    password: {
      defaultValue: '',
      type: function(value) {
        return value + 'someseed'
      },
      validations: [
        'notEmpty'
      ]
    }
  }
})