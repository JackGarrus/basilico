import { useForm, useFieldArray } from "react-hook-form";
import { filterAllergens } from 'utils/vegUtils';

import style from './FilterAllergens.module.scss';


interface Allergens {
  id: string;
  name: string;
}

const allergens: Allergens[] = [
  { id: "eggs", name: "eggs" },
  { id: "seeds", name: "seeds" },
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
    filterAllergens(mergeSelectedAllergens(values));
  });

  const mergeSelectedAllergens = (selectedAllergens: any): string[] => {
    let formValues: any = selectedAllergens;
    let formValuesKeys: string[] = Object.keys(formValues)
    let formValuesKeysNoData = formValuesKeys.filter(e => e !== 'data') // FIIIIIIXXXXXX
    return formValuesKeysNoData.filter((key: any) => {
      return formValues[key] === true && formValues[key]
    }); //fix, maronn
  }

  const { fields } = useFieldArray({
    control,
    name: "data.selected"
  });

  return (
    <form noValidate className={style.form}>
      {fields.map((field: any, i: any) => {
        return (
          <div className={style.container} key={i}>
            {field.allergens.map((allergene: any, j: any) => {
              return (
                <label key={allergene.id} className={style.checkboxLabel}>
                  <input
                    id={j}
                    type="checkbox"
                    {...register(allergene.id)}
                    name={allergene.name}
                  />
                  <p className={style.text}>{allergene.name}</p>
                  <div className={style.checkboxCustom}></div>
                </label>
              );
            })}
          </div>
        );
      })}

      <button onClick={onSave} className={style.btn}>Search</button>
    </form>

  );
};

export default FilterAllergens;
