import { ElementForTagName } from "@glint/environment-ember-loose/-private/dsl";
import Component from "@glint/environment-ember-loose/ember-component";

interface AnimatedContainerSignature<Tag extends string> {
  /** Multiple tags supported for base element via `tag` arg */
  Element: ElementForTagName<Tag>;
  Args: {
    motion?: string;

    /** Whether to animate the initial render. You will probably also need to set initialInsertion=true on a child component of animated-container. Defaults to false. */
    onInitialRender?: boolean

    /** Use a custom tag for the container. Defaults to div. */
    tag?: Tag
  };
  Yields: {
    default: [];
  };
}

export default class AnimatedContainer<Tag extends string = 'div'> extends Component<AnimatedContainerSignature<Tag>> {}
