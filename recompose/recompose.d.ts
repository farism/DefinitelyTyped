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

  type ComponentDecorator<Props, OwnerProps> =
    (component: ComponentType<Props>) => ComponentClass<OwnerProps>

  type InferableComponentDecorator =
    <Props, ComponentConstruct extends (ComponentType<Props>)>(component: ComponentConstruct) => ComponentConstruct

  export function mapProps<Props, OwnerProps>(
    propsMapper: (props: Props) => OwnerProps
  ): (component: ComponentType<Props>) => ComponentType<Props>

  export function withProps<Props, OwnerProps>(
    createProps: ((props: Props) => Props & OwnerProps | OwnerProps) | Object
  ): (component: ComponentType<Props>) => ComponentType<Props>

  export function withPropsOnChange<Props, OwnerProps>(
    shouldMapOrKeys: string[] | ((props: Props, nextProps: Props) => boolean),
    createProps: (props: Props) => Props & OwnerProps | OwnerProps
  ): ComponentDecorator<Props, Props & OwnerProps>

  export function withPropsOnChange<Props, OwnerProps>(
    createProps: (props: Props) => Props & OwnerProps | OwnerProps
  ): ComponentDecorator<Props, Props & OwnerProps>

  export function withHandlers<Props, NextProps>(
    handlerCreators: { [handlerName: string]: (props: Props) => Function }
  ): ComponentDecorator<Props, NextProps>

  export function defaultProps<Props, OwnerProps>(
    props: Props
  ): ComponentDecorator<Props, OwnerProps>

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

  export function withState<Props, OwnerProps>(
    stateName: string,
    stateUpdaterName: string,
    initialState: ((props: Object) => any) | any
  ): ComponentDecorator<Props, OwnerProps>

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

  export function withContext<ContextProps, ComponentOwnerProps>(
    childContextTypes: ValidationMap<ContextProps>,
    getChildContext: (props: ComponentOwnerProps) => any
  ): InferableComponentDecorator

  export function renderComponent<Props>(
    Component: ComponentType<Props>
  ): InferableComponentDecorator

  export function renderNothing(): InferableComponentDecorator

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

  export function setPropTypes<OwnerProps>(
      propTypes: ValidationMap<OwnerProps>
  ): ComponentDecorator<{}, OwnerProps>

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
