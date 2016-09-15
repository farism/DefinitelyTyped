/// <reference path="./recompose.d.ts" />
/// <reference path="../react/react.d.ts"/>
/// <reference path="../react/react-dom.d.ts"/>

import * as React from 'react'
import * as r from 'recompose'

interface IProps {
  foo: 'bar';
}

interface IContextProps {
  ping: 'pong';
}

const Stateless = (props: IProps) => <div />

class Stateful extends React.Component<IProps, {}> {
  render() {
    return <div />
  }
}

[Stateless, Stateful].forEach((Component) => {

  r.withProps({ ping: 'pong' })(Component)

  r.withProps(({ foo }: IProps) => ({ foo2: foo }))(Component)

  r.withPropsOnChange(['foo'], ({ foo }: IProps) => ({ foo2: foo })
  )(Component)

  r.withPropsOnChange(
    (props: IProps, nextProps: Object) => true,
    ({ foo }: IProps) => ({ foo2: foo })
  )(Component)

  r.withHandlers({ onClick: (props) => () => {} })(Component)

  r.renameProp('foo', 'bar')(Component)

  r.renameProps({ foo: 'bar' })(Component)

  r.flattenProp('foo')(Component)

  r.withState('counter', 'setCounter', 0)(Component)

  r.withState('counter', 'setCounter', (props: IProps) => ({}))(Component)

  r.withReducer('counter', 'setCounter', (state: number, action: Object) => ({}), 0)(Component)

  r.branch(
    (props: IProps) => false,
    r.withProps({ foo: 'bar' }),
    r.withProps({ ping: 'pong' })
  )(Component)

  r.renderComponent(Component)

  r.renderNothing(Component)

  r.shouldUpdate((props: IProps, nextProps: IProps) => false)(Component)

  r.pure(Component)

  r.onlyUpdateForKeys(['foo'])(Component)

  r.onlyUpdateForPropTypes(Component)

  r.withContext({ ping: 'pong' }, (props: IProps) => { foo: 'bar' })

  r.getContext({ ping: 'pong' })

  r.setStatic('biz', 'baz')(Component)

  r.setPropTypes({ ping: 'pong' })(Component)

  r.setDisplayName('MyComponent')(Component)

  r.compose(
    () => {},
    () => {}
  )(Component)

  r.getDisplayName(Component)

  r.wrapDisplayName(Component, 'foo')

  r.shallowEqual({}, {})

  r.isClassComponent(Component)

  r.createEagerElement(Component, {}, <div />)

  r.createEagerFactory(Component)

  r.createSink(() => {})

  r.componentFromProp('component')

  r.nest(
    Component,
    (props: any) => <span />,
    (props: any) => <a />
  )

  r.hoistStatics(Component)

  r.componentFromStream((props: any) => <div />)

  r.mapPropsStream(
    (props: any) => ({}),
    Component
  )

  r.createEventHandler()
})
