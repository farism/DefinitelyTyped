// Type definitions for recompose 0.20.2
// Project: https://github.com/acdlite/recompose
// Definitions by: Faris Mustafa <https://github.com/farism>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module 'recompose' {

  type ComponentClass<Props> = __React.ComponentClass<Props>
  type StatelessComponent<Props> = __React.StatelessComponent<Props>
  type ValidationMap<Props> = __React.ValidationMap<Props>
  type ComponentType<Props> = ComponentClass<Props> | StatelessComponent<Props>

  type ComponentDecorator<Props, OwnProps> =
    (component: ComponentType<Props>) => ComponentClass<OwnProps>

  type InferableComponentDecorator =
    <Props, ComponentConstruct extends (ComponentType<Props>)>(component: ComponentConstruct) => ComponentConstruct

  export function mapProps<Props, OwnProps>(
    propsMapper: (props: Props) => OwnProps
  ): (component: ComponentType<Props>) => ComponentType<Props>

  export function withProps<Props, OwnProps>(
    createProps: (props: Props) => Props & OwnProps | OwnProps
  ): (component: ComponentType<Props>) => ComponentType<Props>

  export function withPropsOnChange<Props, OwnProps>(
    shouldMapOrKeys: string[] | ((props: Props, nextProps: Props) => boolean),
    createProps: (props: Props) => Props & OwnProps | OwnProps
  ): ComponentDecorator<Props, Props & OwnProps>

  export function withPropsOnChange<Props, OwnProps>(
    createProps: (props: Props) => Props & OwnProps | OwnProps
  ): ComponentDecorator<Props, Props & OwnProps>

  export function withHandlers<Props, NextProps>(
    handlerCreators: { [handlerName: string]: (props: Props) => Function }
  ): ComponentDecorator<Props, NextProps>

  export function defaultProps<Props, OwnProps>(
    props: Props
  ): ComponentDecorator<Props, OwnProps>

  export function renameProp(
    oldName: string,
    newName: string
  ): InferableComponentDecorator

  export function renameProps(
    nameMap: { [key: string]: string }
  ): InferableComponentDecorator

  export function renameProps(
    nameMap: { [key: string]: string }
  ): InferableComponentDecorator

  export function flattenProp(
    propName: string
  ): InferableComponentDecorator

  export function withState<Props, OwnProps>(
    stateName: string,
    stateUpdaterName: string,
    initialState: (props: Object) => any | any
  ): ComponentDecorator<Props, OwnProps>

  export function withReducer<State, Action>(
    stateName: string,
    dispatchName: string,
    reducer: (state: State, action: Action) => State,
    initialState: State
  ): InferableComponentDecorator

  export function branch(
    test: (props: Object) => boolean,
    left: any,
    right: any
  ): InferableComponentDecorator

  export function withContext<ContextProps, ComponentOwnProps>(
    childContextTypes: ValidationMap<ContextProps>,
    getChildContext: (props: ComponentOwnProps) => any
  ): InferableComponentDecorator

  export function getContext<Props, ContextProps>(
    contextTypes: ValidationMap<ContextProps>
  ): ComponentDecorator<Props, Props & ContextProps>

  export function pure<Props, ComponentConstruct extends (ComponentType<Props>)> (
    component: ComponentConstruct
  ): ComponentConstruct

  export function onlyUpdateForKeys(
    propKeys: string[]
  ): InferableComponentDecorator

  export function onlyUpdateForPropTypes(): InferableComponentDecorator

  export function setPropTypes<OwnProps>(
      propTypes: ValidationMap<OwnProps>
  ): ComponentDecorator<{}, OwnProps>

  export function componentFromProp<Props>(
    propName: string
  ): ComponentClass<Props>

  interface IReactLifeCycleMethods {
    componentWillMount?: Function;
    componentDidMount?: Function;
    componentWillReceiveProps?: Function;
    shouldComponentUpdate?: Function;
    componentWillUpdate?: Function;
    componentDidUpdate?: Function;
    componentWillUnmount?: Function;
  }

  export function lifecycle(
    spec: IReactLifeCycleMethods
  ): InferableComponentDecorator

  export function compose<Props, NextProps>(
    ...functions: Function[]
  ): ComponentDecorator<Props, NextProps>

}
