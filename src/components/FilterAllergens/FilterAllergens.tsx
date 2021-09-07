import { useForm, useFieldArray } from "react-hook-form";
import { RECIPES } from 'data/recipes';

import style from './FiltersContainer.module.scss';
import { filterAllergens } from 'data/vegetablesList';


interface Allergens {
  id: string;
  name: string;
}

const allergens: Allergens[] = [
  { id: "eggs", name: "eggs" },
  { id: "seeds", name: "sesame" },
  { id: "soy", name: "soy" },
  { id: "nuts", name: "nuts" },
  { id: "gluten", name: "gluten" },
  { id: "lactose", name: "lactose" }
];

interface CheckedItem {
  id: string;
  selected: boolean;
  name: string;
}

interface CheckedItems {
  allergens: CheckedItem[];
}

interface FormData {
  selected: CheckedItems[] | undefined;
}

interface FormProperties {
  data: FormData;
}

const FilterAllergens: React.FC = () => {

  const [recipes = RECIPES.map(e => e.recipes)] = RECIPES
  //array.find recipes che non hanno gli allergeni selezionati

  const { handleSubmit, control, register } = useForm<FormProperties>({
    defaultValues: {
      data: {
        selected: [
          {
            allergens: allergens.map((rt) => {
              return { id: rt.id, name: rt.name, selected: false };
            })
          }
        ]
      }
    }
  });

  const onSave = handleSubmit((values) => {
    console.log(filterAllergens(mergeSelectedAllergens(values)))
  });

  const mergeSelectedAllergens = (selectedAllergens: any): string[] => {
    let formValues: any = selectedAllergens;
    let formValuesKeys: string[] = Object.keys(formValues)
    return formValuesKeys.filter((key: any) => {
      return formValues[key] === true && formValues[key]
    }); //fix, maronn
  }

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
              {field.allergens.map((allergene: any, j: any) => {
                return (
                  <label key={allergene.id}>
                    <input
                      id={j}
                      type="checkbox"
                      {...register(allergene.id)}
                      name={allergene.name}
                    />
                    {allergene.name} free
                  </label>
                );
              })}
            </div>
          );
        })}

        <button onClick={onSave}>Submit</button>
      </form>
    </div>

  );
};

export default FilterAllergens;
