import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import style from './FiltersContainer.module.scss';


interface RecipeType {
  id: string;
  name: string;
}

const recipeType: RecipeType[] = [
  { id: "vegan", name: "Vegan" },
  { id: "vegetarian", name: "Vegetarian" },
  { id: "meat", name: "Meat" },
  { id: "fish", name: "Fish" },
  { id: "sweet", name: "Sweet" }
];

interface CheckedItem {
  id: string;
  selected: boolean;
  name: string;
}

interface CheckedItems {
  recipeType: CheckedItem[];
}

interface FormData {
  selected: CheckedItems[] | undefined;
}

interface FormProperties {
  data: FormData; //interfaccia del form
}


const FilterRecipes: React.FC = () => {
  const { handleSubmit, control } = useForm<FormProperties>({
    defaultValues: {
      data: {
        selected: [
          {
            recipeType: recipeType.map((rt) => {
              return { id: rt.id, name: rt.name, selected: false };
            })
          }
        ]
      }
    }
  });

  const onSave = handleSubmit((form) => {
    console.log(form);
  });

  const { fields } = useFieldArray({
    control,
    name: "data.selected"
  });

  return (
    <div>
      <form noValidate>
        {fields.map((field: any, i: any) => {
          return (
            <div>
              {field.recipeType.map((rt: any, j: any) => {
                return (
                  <div key={rt.id}>
                    <label>
                      {rt.name}
                      <input type="checkbox" onChange={(e) => e.target.checked} checked={rt.value} id={`data.selected[${i}].rt[${j}].id`} name={`data.selected[${i}].rt[${j}].selected`} />
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}

        <div onClick={onSave}>Submit</div>
      </form>
    </div>

  );
};

export default FilterRecipes;
