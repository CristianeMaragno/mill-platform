import { CreateCheckoutLink, CreateCustomerIfNull, GenerateCustomerPortalLink } from '~/utils/billing';
import { useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";
import Link from "next/link";

export const UpgradeButton = async () => {
    await CreateCustomerIfNull();
    const {user} = useUser();

    const userEmail = user?.primaryEmailAddress ? user.primaryEmailAddress.toString() : "";
    const { data } = api.user.findUser.useQuery({userEmail});

    const checkoutLink = await CreateCheckoutLink("" + data?.paymentCustomerId);

    return (
        <main className="">
            <Link href={checkoutLink ? checkoutLink : ""}>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                    Upgrade plano
                </button>
            </Link>
        </main>
    );
};

export const ManageButton = async () => {
    await CreateCustomerIfNull();
    const {user} = useUser();

    const userEmail = user?.primaryEmailAddress ? user.primaryEmailAddress.toString() : "";
    const { data } = api.user.findUser.useQuery({userEmail});

    const manageLink = await GenerateCustomerPortalLink("" + data?.paymentCustomerId);

    return (
        <main className="">
            <Link href={manageLink ?? ""}>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                    Adiministrar pagamento
                </button>
            </Link>
        </main>
    );
};