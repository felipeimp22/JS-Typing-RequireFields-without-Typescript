const isRequired = text => { throw new Error(`${text} is required`) }

function assignUser(
    user = isRequired('user'),
    policies = isRequired('policy')

) {
    console.log(user, policies)
}

assignUser('Felipe', 'Policy')