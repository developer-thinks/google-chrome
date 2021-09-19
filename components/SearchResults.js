import PaginationButtons from './PaginationButtons';
import Image  from 'next/image';

// results.searchInformation?.formattedTotalResults
// results.searchInformation?.formattedSearchTime

function SearchResults({results}) {

    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md: pl-[14%] lg:pl-52 " >
            <p className="text-gray-600 text-md mb-5 mt-3" > About {11} Results ( {0.45} seconds)  </p>
          
        {/* <Image 
            src="https://www.linkpicture.com/q/IMG_20210626_125723-1.jpg"
            width={200}
            height={240}
            className="cursor-pointer  "
            
        />
        <Image 
            src="https://www.linkpicture.com/q/IMG_20210629_105446-1.jpg"
            width={200}
            height={240}
            className="cursor-pointer  "
            
        />
        <Image 
            src="https://www.linkpicture.com/q/IMG_20210626_125728-1.jpg"
            width={200}
            height={240}
            className="cursor-pointer  "
            
        /> */}
        {/* <Image 
            src="https://www.linkpicture.com/q/IMG_20210628_110135-1.jpg"
            width={250}
            height={300}
            className="cursor-pointer  "
            
        /> */}
        {/* <Image 
            src="https://www.linkpicture.com/q/IMG_20210101_052223-1.jpg"
            width={250}
            height={300}
            className="cursor-pointer "    
        />

          <Image 
            src="https://www.linkpicture.com/q/IMG_20210619_122340-1.jpg"
            width={250}
            height={300}
            className="cursor-pointer  "
            
        />
            <Image 
            src="https://www.linkpicture.com/q/IMG_20210629_105415.jpg"
            width={250}
            height={300}
            className="cursor-pointer  "
            
        /> */}
        {/* <Image 
            src="https://www.linkpicture.com/q/IMG_20210621_122744-1.jpg"
            width={240}
            height={300}
            className="cursor-pointer  "
        /> */}

            {results.items?.map((result)=>(
                    <div key={result.link} className="max-w-xl  mb-8" >
                        <div className="group" >
                            <a href={result.link} className="text-sm" > {result.formattedUrl} </a>
                            <a href={result.link} className="text-sm" > <h2 className="truncate text-xl  text-blue-800 font-medium group-hover:underline" > {result.title}  </h2>  </a>


                        </div>
                        <p className="line-clamp-2" > {result.snippet} </p>

                    </div>
            ))}

            <PaginationButtons />

        </div>
    )
}

export default SearchResults;
