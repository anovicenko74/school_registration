module.exports = class UserDto {
    email;
    id;
    isActivated;
    score

    constructor(model) {
        this.email = model.email,
        this.id = model.id,
        this.isActivated = model.isActivated
        this.score = model.score
        this.school_class = model.school_class
    }
}