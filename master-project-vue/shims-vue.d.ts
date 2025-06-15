// Prevents errors where ts cannot recognise importing a .vue file due to missing declaration.
declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}