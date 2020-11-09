import React from 'react'
import Layout from '../components/layout'

export default function BlogPost() {
  return (
    <Layout>
      <article className="p-12">
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl font-bold mb-2">Why Every Developer Should Have A Blog</h2>
          <div className="mb-4 text-sm text-gray-600">
            <span>Published 2 days ago</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
            <span className="mx-2">•</span>
            <span>4 comments</span>
          </div>
          <figure class="blog-banner">
				        <a href="https://made4dev.com"><img class="img-fluid" src="https://themes.3rdwavemedia.com/devcard/bs4/2.2/assets/images/blog/blog-post-banner.jpg" alt="image"/></a>
				        <figcaption class="mt-2 text-center image-caption">Image Credit: <a href="https://made4dev.com?ref=devblog" target="_blank">made4dev.com (Premium Programming T-shirts)</a></figcaption>
				    </figure>
				    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
				    
				    <h3 class="mt-5 mb-3">Code Block Example</h3>
				    <p>You can get more info at <a href="https://highlightjs.org/" target="_blank">https://highlightjs.org/</a>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
        </div>
      </article>
    </Layout>
  )
}
