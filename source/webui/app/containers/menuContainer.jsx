import { connect } from 'react-redux';
import { selectMenu } from 'actions/index.jsx';
import Menu from 'components/Menu.jsx';

const mapStateToProps = (state) => ({
    menuItems: state.menuItems
});

const mapDispatchToProps = (dispatch) => ({
    onMenuClick(menuText) {
        dispatch(selectMenu(menuText))
    }
});

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuContainer

/*
    Technically, a container component is just a React component that uses store.subscribe()
    to read a part of Redux state tree and supply props to a presentational component it renders.

    You could write a container component by hand, but we suggest instead generating container
    components with the react-redux library's connect() function, which provides many useful
    optimizations to prevent unnecessary re-renders.

    To use connect(), you need to define a special function called "mapStateToProps()" that
    tells how to transform the current Redux store state into the props you want to pass to a
    presentational component you are wrapping.

    In addition to reading the state, container components can dispatch ations. In a similar
    fashion, you can define a function called "mapDispatchToProps()" that receives the dispatch()
    method and returns callback props that you want to inject into the presentational component.
 */