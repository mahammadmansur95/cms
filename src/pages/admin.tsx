import { SEO } from "@/components/common/Seo";
import { useEffect } from "react";
import config from "../../cms/config";


const Admin = () => {
    useEffect(() => {
        (async () => {
          const CMS: any = (await import('netlify-cms-app')).default;
          CMS.init({ config });
        })();
      }, []);

    return(
        <div>
            <SEO
                title="Admin page"
                description="This is admin page"
            />
        </div>
    );
};


export default Admin;