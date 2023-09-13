import React, { useMemo, useState } from 'react'
import Heading from '../Heading/Heading';
import Input from '../Inputs/Input';
import { RegisterOptions, FieldValues, UseFormRegisterReturn, useForm, SubmitHandler } from 'react-hook-form';
import Modal from './Modal';
import usePersonModal from '@/hooks/usePersonModal';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

enum STEPS {
  FIRSTNAME = 0,
  LASTNAME = 1,
  MESSAGE = 2,
  CONTACT = 3
}

const DATA_SOURCE_URL = "https://myfakeapi.com/api/contactus"

export default function PersonModal() {
  const [step, setStep] = useState(STEPS.FIRSTNAME)
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
    if (step == STEPS.CONTACT) {
      return "Create";
    }

  return "Next";
}, [step]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step != STEPS.CONTACT) {
      return onNext();
    }

    setIsLoading(true);

    fetch(DATA_SOURCE_URL, data)
    .then(() => {
      toast.success('Information Sent!');
      router.refresh();
      reset();
      setStep(STEPS.FIRSTNAME)
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

  const secondaryActionLabel = useMemo(() => {
    if (step == STEPS.FIRSTNAME) {
      return undefined;
    }

    return "Back";
  }, [step]);

    const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      message: "",
      contact: ""
    },
  });

  const firstName = watch("firstName")
  const lastName = watch("lastName")
  const message = watch("message")
  const contact = watch("contact")

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
       
          <div className="col-span-1 text-black">
            <Input id='firstName' label='First Name' disabled={isLoading} register={register} errors={errors} required/>
          </div>
      </div>
    </div>
  )
  return (
   <Modal
      isOpen={personModal.isOpen}
      onClose={personModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel as string}
      secondaryAction={step == STEPS.FIRSTNAME ? undefined : onBack}
      title="NextBnB your Home!"
      body={bodyContent}
  )
}

