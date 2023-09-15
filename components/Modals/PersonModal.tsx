'use client'

import React, { useMemo, useState } from 'react'
import Heading from '../Heading/Heading';
import Input from '../Inputs/Input';
import { RegisterOptions, FieldValues, UseFormRegisterReturn, useForm, SubmitHandler } from 'react-hook-form';
import Modal from './Modal';
import usePersonModal from '@/hooks/usePersonModal';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { categories } from '@/libs/Categories';
import CategoryInput from '../Inputs/CategoryInput';

enum STEPS {
  DESCRIPTION = 0,
  CATEGORY = 1,
  IMAGE = 2,
}

const DATA_SOURCE_URL = "https://fakestoreapi.com/products"

export default function PersonModal() {
  const [step, setStep] = useState(STEPS.DESCRIPTION)
  const [isLoading, setIsLoading] = useState(false)
  const personModal = usePersonModal()
  const router = useRouter()

   const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step == STEPS.IMAGE) {
      return "Create";
    }

  return "Next";
}, [step]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('DATA', data)
    if (step != STEPS.IMAGE) {
      return onNext();
    }

    data.contact = Number(data.contact)

    setIsLoading(true);

    fetch(DATA_SOURCE_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'di'},
      body: JSON.stringify(data)
    })
    .then(() => {
      toast.success('Information Sent!');
      router.refresh();
      reset();
      setStep(STEPS.DESCRIPTION)
      personModal.onClose()
    }).catch(() => {
      toast.error("Sorry, something went wrong.")
    }).finally(() => {
      setIsLoading(false)
    })
    // axios
    //   .post("/api/listings", data)
    //   .then(() => {
    //     toast.success("Listing Created!");
    //     router.refresh();
    //     reset();
    //     setStep(STEPS.CATEGORY);
    //     rentModal.onClose();
    //   })
    //   .catch(() => {
    //     toast.error("Sorry, something went wrong.");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const secondaryActionLabel = useMemo(() => {
    if (step == STEPS.DESCRIPTION) {
      return undefined;
    }

    return "Back";
  }, [step]);

    const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    },
  });

  const title = watch("title")
  const price = watch("price")
  const description = watch("description")
  const image = watch("image")
  const category = watch("category")

  // DEFAULT BODY CONTENT
  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="How would you describe your item?"
        subtitle="Short and sweet works best."
      />
      <Input type='text' id='title' label='Title' disabled={isLoading} register={register} errors={errors} required />
      <Input type='text' id='description' label='Description' disabled={isLoading} register={register} errors={errors} required />
      <Input type='number' id='price' label='Price' disabled={isLoading} register={register} errors={errors} required />
      
    </div>
  )

if(step == STEPS.CATEGORY) {
  bodyContent = (
      <div className="text-black flex flex-col gap-8">
        <Heading title="What Category would you say your item is?" subtitle=""/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => (
          <div key={item.label} className="col-span-1 text-black">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category == item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
        </div>
      </div>
  )
}

if(step == STEPS.IMAGE) {
  bodyContent = (
          <div className="flex flex-col gap-8">
        <Heading
          title="Please provide a great contact number."
          subtitle="We promise no funny business."
        />
        <Input
          id="contact"
          label="Contact Number"
          type='number'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
  )
}

  return (
   <Modal
      isOpen={personModal.isOpen}
      onClose={personModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel as string}
      secondaryAction={step == STEPS.DESCRIPTION ? undefined : onBack}
      title="Contact Form"
      body={bodyContent}
      />
  )
}

