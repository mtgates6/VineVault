'use client'

import Link from 'next/link'
import { GlassWater, Users, Star } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wine-900 to-wine-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif mb-6">Your Wine Journey Starts Here</h1>
            <p className="text-xl mb-8 text-wine-100">
              Discover, rate, and share your wine experiences with fellow enthusiasts.
              Join the world's largest wine-loving community.
            </p>
            <div className="space-x-4">
              <Link href="/signup" className="inline-flex items-center px-6 py-3 rounded-lg bg-wine-500 text-white hover:bg-wine-600 transition-colors">
                Start Your Journey
              </Link>
              <Link href="/explore" className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                Explore Wines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Why VineVault?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-wine-100 rounded-full">
                <GlassWater className="w-6 h-6 text-wine-500" />
              </div>
              <h3 className="text-xl font-serif mb-2">Track Your Tastings</h3>
              <p className="text-gray-600">
                Keep a detailed record of every wine you try and build your personal tasting journey.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-wine-100 rounded-full">
                <Users className="w-6 h-6 text-wine-500" />
              </div>
              <h3 className="text-xl font-serif mb-2">Connect with Others</h3>
              <p className="text-gray-600">
                Follow other wine enthusiasts, share recommendations, and join tasting groups.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-wine-100 rounded-full">
                <Star className="w-6 h-6 text-wine-500" />
              </div>
              <h3 className="text-xl font-serif mb-2">Discover New Wines</h3>
              <p className="text-gray-600">
                Get personalized recommendations based on your taste preferences and ratings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 