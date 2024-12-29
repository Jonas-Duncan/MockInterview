// Implementing the questions section on interview screen
import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
    const textToSpeach = (text) => {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech)
        }
        else {
            alert('Sorry, Your browser does not support text to speech')
        }
    }

    // Displaying interview questions
    return mockInterviewQuestion && (
        <div className='p-5 border rounded-lg'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {mockInterviewQuestion && mockInterviewQuestion.map((question, index) => (
                    <h2 className={`p-2 border rounded-full
                text-xs md:text-sm text-center cursor-pointer
                ${activeQuestionIndex == index && 'bg-black text-white'}`}>Question #{index + 1}</h2>
                ))}
            </div>
            <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>

            {/* <Adding a volume button to speak the AI generated question */}
            <Volume2 className='cursor-pointer' onClick={() => textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)} />

            {/* Displaying an information note */}
            <div className='border rounded-lg p-5 bg-blue-100 mt-20 '>
                <h2 className='flex gap-2 items-center text-black'>
                    <Lightbulb />
                    <strong>Hint:</strong>
                </h2>
                <h2 className='text-md text-black my-3'>{mockInterviewQuestion[activeQuestionIndex]?.hint}</h2>
            </div>
        </div>
    )
}

export default QuestionsSection