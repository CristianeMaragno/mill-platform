import { useUser } from "@clerk/nextjs";
import Stripe from 'stripe';
import { PrismaClient } from "@prisma/client";
import { api } from "~/utils/api";

const prisma = new PrismaClient();

//price_1NarR3APMZcBliJSoefCKTi5 code for a product

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
    apiVersion: '2023-08-16',
});

export const HasSubscription = async () => {
    const {user} = useUser();

    if (user) {
        const userEmail = user.primaryEmailAddress ? user.primaryEmailAddress.toString() : "";
        const { data } = api.user.findUser.useQuery({userEmail});

        const subscriptions = await stripe.subscriptions.list({
            customer: String(data?.paymentCustomerId)
        })

        return subscriptions.data.length > 0;
    }

    return false;
}

export const GenerateCustomerPortalLink = async (customerId: string) => {
    try {
        
        const portalSession = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: "http://localhost:3000/settings/billing", 
        });

        return portalSession.url;
    } catch (error) {
        console.log(error)
        return undefined;
    }
}

export const CreateCheckoutLink = async (customer: string) => {
    const checkout = await stripe.checkout.sessions.create({
        success_url: "http://localhost:3000/billing?success=true",
        cancel_url: "http://localhost:3000/billing?success=true",
        customer: customer,
        line_items: [
            {
                price: 'price_1NarR3APMZcBliJSoefCKTi5'
            }
        ],
        mode: "subscription"
    })

    return checkout.url;
}

export const CreateCustomerIfNull = async () => {
    const {user} = useUser();

    if (user) {
        const userEmail = user.primaryEmailAddress ? user.primaryEmailAddress.toString() : "";
        const { data } = api.user.findUser.useQuery({userEmail});

        if (!data?.paymentCustomerId) {
            const customer = await stripe.customers.create({
                email: String(user.primaryEmailAddress)
            })

            await prisma.user.update({
                where: {
                    id: data?.id
                },
                data: {
                    paymentCustomerId: customer.id
                }
            })
            return customer.id;
        }
        //const {data} = api.user.findUser.useQuery({userEmail});
        //return data.paymentCustomerId;
    }

}