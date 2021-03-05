module.exports = {
    handleAbout: (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('hallo')
        this.setState({screen: 'about'}, () => {console.log('about')})
    }
}