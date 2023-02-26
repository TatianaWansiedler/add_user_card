const users = [
    { id: 1, name: 'Alexander', gender: 'm', image: 'http://www.sg-unter-abtsteinach.de/wp-content/uploads/2022/02/male-placeholder-image.jpeg' },
    { id: 2, name: 'Elena', gender: 'f', image: 'https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg' },
    { id: 3, name: 'John', gender: 'm', image: 'http://www.sg-unter-abtsteinach.de/wp-content/uploads/2022/02/male-placeholder-image.jpeg' },
]

export const usersReducer = (state = users, action) => {
    if (action.type === 'ADD') {
        return [...state, action.payload]
    } else if (action.type === 'DELETE') {
        return state.filter(({ id }) => id !== action.payload)
    } else {
        return state
    }
}

