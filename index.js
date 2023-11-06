function submitData() {

fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: "Nugget the Cat",
        email: "nuggetthecat@gmail.com"
    }),
})
.then(r => r.json())
.then(data => {
    let newId = data.id
    newId = document.body.append(newId)
} )

.catch((error) => {
    error = {
        message: "Something did not work!"
    }

const errorMessage = document.body.append(error.message)
})

return fetch()

}

submitData()


