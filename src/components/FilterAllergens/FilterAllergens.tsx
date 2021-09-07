import { useForm, useFieldArray } from "react-hook-form";
import { RECIPES } from 'data/recipes';

import style from './FiltersContainer.module.scss';


interface Allergens {
  id: string;
  name: string;
}

const allergens: Allergens[] = [
  { id: "eggs_free", name: "Eggs free" },
  { id: "seeds_free", name: "Sesame seeds free" },
  { id: "soy_free", name: "Soy free" },
  { id: "peanuts_free", name: "Peanuts free" },
  { id: "gluten_free", name: "Gluten free" },
  { id: "lactose_free", name: "Lactose free" }
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

  const { handleSubmit, control, register, watch } = useForm<FormProperties>({
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
              {field.allergens.map((allergene: any, j: any) => {
                return (
                  <label key={allergene.id}>
                    <input
                      id={j}
                      type="checkbox"
                      {...register(allergene.id)}
                      name={allergene.id}
                    />
                    {allergene.name}
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
