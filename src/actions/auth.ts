'use server'

import { client } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'

export async function onAuthenticateUser() {
    try {
        const user = await currentUser()

        if (!user) {
            return {
                status: 403,
            }
        }

        const userExists = await client.user.findUnique({
            where: {
                clerkId: user.id,
            },
        })

        if (userExists) {
            return {
                status: 200,
                user: userExists,
            }
        }
        const newUser = await client.user.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                name: user.firstName + ' ' + user.lastName,
                profileImage: user.imageUrl,
            },
        })

        if (!newUser) {
            return {
                status: 500,
                message: 'Failed to create user',
            }
        }

        return {
            status: 201,
            user: newUser,
        }
    } catch (error) {
        console.log('ERROR', error)
        return { status: 500, error: 'Internal Server Error' }
    }
}