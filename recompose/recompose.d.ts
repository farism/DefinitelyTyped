// Type definitions for recompose 0.20.2
// Project: https://github.com/acdlite/recompose
// Definitions by: Faris Mustafa <https://github.com/farism>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module 'recompose' {

  type ReactNode = __React.ReactNode
  type ReactElement<Props> = __React.ReactElement<Props>
  type ComponentClass<Props> = __React.ComponentClass<Props>
  type StatelessComponent<Props> = __React.StatelessComponent<Props>
  type ValidationMap<Props> = __React.ValidationMap<Props>

  type ComponentType<Props> = ComponentClass<Props> | StatelessComponent<Props>
  type ComponentDecorator<Props, OwnerProps> =
    (component: ComponentType<Props>) => ComponentClass<OwnerProps>
  type InferableComponentDecorator =
    <Props, ComponentConstruct extends (ComponentType<Props>)>(component: ComponentConstruct) => ComponentConstruct

  interface IReactLifeCycleMethods {
    componentWillMount?: Function;
    componentDidMount?: Function;
    componentWillReceiveProps?: Function;
    shouldComponentUpdate?: Function;
    componentWillUpdate?: Function;
    componentDidUpdate?: Function;
    componentWillUnmount?: Function;
  }

  interface Handler<T>{
    handler: (value: T) => void;
    stream: Observable<T>;
  }

  interface Stream<T>{}

  interface Observable<T>{}

  type fromESObservable<T> = (observable: Observable<T>) => Stream<T>
  type toESObservable<T> = (stream: Stream<T>) => Observable<T>

  interface ObservableConfig<T>{
    fromESObservable: fromESObservable<T>;
    toESObservable: toESObservable<T>;
  }

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
    handlerCreators: {
      [handlerName: string]: (props: Props) => Function
    }
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

  export function renderComponent<Props>(
    Component: ComponentType<Props>
  ): InferableComponentDecorator

  export function renderNothing<Props, ComponentConstruct extends (ComponentType<Props>)>(
    component: ComponentConstruct
  ): ComponentConstruct

  export function shouldUpdate<Props>(
    test: (props: Props, nextProps: Props) => boolean
  ): InferableComponentDecorator

  export function pure<Props, ComponentConstruct extends (ComponentType<Props>)>(
    component: ComponentConstruct
  ): ComponentConstruct

  export function onlyUpdateForKeys(
    propKeys: string[]
  ): InferableComponentDecorator

  export function onlyUpdateForPropTypes<Props, ComponentConstruct extends (ComponentType<Props>)>(
    component: ComponentConstruct
  ): InferableComponentDecorator

  export function withContext<ContextProps, ComponentProps>(
    childContextTypes: ContextProps,
    getChildContext: (props: ComponentProps) => any
  ): InferableComponentDecorator

  export function getContext<ContextProps, ComponentProps>(
    contextTypes: ContextProps
  ): ComponentDecorator<ComponentProps, ComponentProps & ContextProps>

  export function lifecycle(
    spec: IReactLifeCycleMethods
  ): InferableComponentDecorator

  export function toClass<Props>(
    component: ComponentType<Props>
  ): InferableComponentDecorator

  export function setStatic(
    key: string,
    value: any
  ): InferableComponentDecorator

  export function setPropTypes<Props>(
    propTypes: Props
  ): InferableComponentDecorator

  export function setDisplayName(
    displayName: string
  ): InferableComponentDecorator

  export function compose<Props, NextProps>(
    ...functions: Function[]
  ): ComponentDecorator<Props, NextProps>

  export function getDisplayName<Props>(
    component: ComponentType<Props>
  ): string

  export function wrapDisplayName<Props>(
    component: ComponentType<Props>,
    wrapperName: string
  ): string

  export function shallowEqual(a: Object, b: Object): boolean

  export function isClassComponent(value: any): boolean

  export function createEagerElement<Props>(
    type: ComponentType<Props> | string,
    props: Object,
    children: ReactNode
  ): ReactElement<Props>

  export function createEagerFactory<Props>(
    type: ComponentType<Props> | string
  ): (props: Object, children: ReactNode) => ReactElement<Props>

  export function createSink<Props>(
    callback: (props: Props) => void
  ): ComponentType<Props>

  export function componentFromProp<Props>(
    propName: string
  ): ComponentClass<Props>

  export function nest<Props>(
    ...components: Array<ComponentType<Props> | string>
  ): ComponentType<Props>

  export function hoistStatics<Props>(hoc: ComponentType<Props>): ComponentType<Props>

  export function componentFromStream<Props>(
    propsToReactNode: (props$: Observable<Props>) => Observable<ReactNode>
  ): ComponentType<Props>

  export function mapPropsStream(
    ownerPropsToChildProps: (props$: Observable<Object>) => Observable<Object>,
    BaseComponent: ComponentType<Object>
  ): ComponentType<Object>

  export function createEventHandler<T>(): Handler<T>

  export function setObservableConfig<T>(config: ObservableConfig<T>): any

}
